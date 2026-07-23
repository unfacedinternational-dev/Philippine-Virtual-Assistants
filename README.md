# PVA Marketplace

Real accounts, real chat between buyer and seller, and real payments (via Xendit)
that split automatically: seller gets their share, you keep your platform fee.

This replaced the old version, which stored everything in `window.storage` —
an API that only exists inside Claude's own preview window. On a real site
there is no `window.storage`, so nothing ever saved. Everything below now
runs on a real, free-tier backend (Supabase) instead.

## What you need to set up (one-time, ~30-45 min)

### 1. Supabase (accounts, database, chat)
1. Go to supabase.com -> New project (free tier is fine).
2. Once it's ready: **SQL Editor** -> New query -> paste everything in
   `supabase/schema.sql` from this project -> Run.
3. **Settings -> API** -> copy the **Project URL** and **anon public** key.
4. Copy `.env.example` to `.env` in this project and paste those two values in.
5. **Authentication -> Providers**: Email is on by default -- that's all you need,
   people sign in with a magic link, no passwords to manage.
6. Make yourself admin: **SQL Editor** -> run
   `update profiles set is_admin = true where email = 'you@example.com';`
   (sign up in the running app first so the row exists, then run this.)

### 2. Xendit (payments)
1. Sign up at xendit.co, switch to **Test mode** first.
2. **Settings -> API Keys** -> copy the **Secret Key**.
3. **Settings -> Webhooks** -> add a webhook for "Invoice Paid" pointing to:
   `https://YOUR-PROJECT-REF.supabase.co/functions/v1/xendit-webhook`
   Copy the **Verification Token** shown there too.
4. Install the Supabase CLI, then from this folder:
   ```
   supabase login
   supabase link --project-ref YOUR-PROJECT-REF
   supabase secrets set XENDIT_SECRET_KEY=xnd_development_xxx
   supabase secrets set XENDIT_WEBHOOK_TOKEN=xxx
   supabase secrets set SUPABASE_SERVICE_ROLE_KEY=xxx   # Settings -> API -> service_role
   supabase functions deploy create-invoice
   supabase functions deploy xendit-webhook
   ```
5. Test with a sandbox card/GCash from Xendit's test docs before going live.
6. When ready for real money: switch Xendit to **Live mode**, generate a
   live secret key, repeat step 4 with the live key, and go through Xendit's
   business verification (they'll ask for a DTI/SEC registration).

### 3. GitHub Pages (hosting the site)
1. Push this whole folder to a GitHub repo.
2. Repo -> **Settings -> Pages** -> Source: **GitHub Actions**.
3. Repo -> **Settings -> Secrets and variables -> Actions** -> add two repo secrets:
   `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (same values as your `.env`).
4. Push to `main` -- the included workflow (`.github/workflows/deploy.yml`)
   builds and deploys automatically. Check the **Actions** tab for progress;
   your site's live URL appears there and under Settings -> Pages once it's done.

## Running it locally first (recommended)
```
npm install
npm run dev
```
Opens at `http://localhost:5173`. Try signing up, posting a listing, approving
it as admin, and sending an inquiry, before wiring up real payments.

## How money moves
- Buyer and seller agree on a price in chat.
- Buyer clicks **Pay**, backend asks Xendit for a checkout link.
- Buyer pays by card/GCash/Maya/bank on Xendit's page.
- Xendit confirms payment to your webhook.
- Webhook marks the order paid, then sends the seller their cut automatically --
  the platform fee (10% by default, see `platform_fee_percent` in the `orders`
  table) stays in your Xendit balance.
- Sellers need GCash/Maya/bank details on file so there's somewhere to send
  their share -- no screen for that yet, so for now add them directly in
  Supabase Table Editor on the seller's `profiles` row: `payout_channel`,
  `payout_account_number`, `payout_account_name`.

## Known gaps to close before taking real customers
- Seller payout details have no UI yet (see workaround above).
- No refund/dispute flow -- currently manual, through your Xendit dashboard.
- No email notifications when a message or order status changes.
- Xendit's exact channel codes (`PH_GCASH`, etc.) should be double-checked
  against your dashboard before going live -- payment providers rename these
  occasionally.
