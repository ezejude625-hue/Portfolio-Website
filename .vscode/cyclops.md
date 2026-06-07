  # ============================================================
# VEXONMART — .env.local
# NEVER commit this file to GitHub — it's in .gitignore
# ============================================================


# ── DATABASE (MySQL) ─────────────────────────────────────────
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=vexonmart


# ── APP ──────────────────────────────────────────────────────
NEXT_PUBLIC_APP_NAME=VexonMart
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_TAGLINE=Shop Smarter. Live Better.


# ── JWT AUTH ─────────────────────────────────────────────────
# Generate with: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
JWT_SECRET=fb2b6219a7b06e5168a522f4ff7d24314ed84d15357088c131749b00d32d0a43dba542c4d69bb040a81a2935b856cb443bbe40593b74a5260cfe69af05601c13
JWT_EXPIRES_IN=7d


# ── ADMIN SECURITY ───────────────────────────────────────────
# Secret token required for admin API calls
# Generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
ADMIN_SECRET_TOKEN=a06d488b7d6c8144d3b58bcca8d2ff1eb627ed587ca502a8e8f7b240c6b8762d

# Comma-separated list of IPs allowed to access /admin
# Find your IP at: https://whatismyip.com
ADMIN_ALLOWED_IPS=127.0.0.1,::1


# ── STRIPE PAYMENTS ──────────────────────────────────────────
# Get these from: https://dashboard.stripe.com/apikeys
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_51...
STRIPE_SECRET_KEY=sk_test_51...
STRIPE_WEBHOOK_SECRET=whsec_...


# ── EMAIL (SMTP) ─────────────────────────────────────────────
# Option A: Gmail (easy for dev)
# Enable "App Passwords" in your Google Account settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ezejude625@gmail.com
SMTP_PASS=ezejude625@gmail
SMTP_FROM_NAME=VexonMart
SMTP_FROM_EMAIL=noreply@vexonmart.com

# Option B: Production (Resend, Mailgun, SendGrid)
# SMTP_HOST=smtp.resend.com
# SMTP_PORT=465
# SMTP_SECURE=true
# SMTP_USER=resend
# SMTP_PASS=re_your_api_key_here


# ── FILE UPLOADS ─────────────────────────────────────────────
# Max file size in MB
UPLOAD_MAX_SIZE_MB=5
# Where uploaded images are stored
UPLOAD_DIR=public/uploads


# ── CLOUDINARY (optional — for cloud image storage) ──────────
# Get from: https://cloudinary.com/console
# Leave blank to use local file uploads instead
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=


# ── PAYPAL (optional) ─────────────────────────────────────────
# Get from: https://developer.paypal.com/dashboard
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_MODE=sandbox


# ── GOOGLE OAUTH (optional — for "Sign in with Google") ───────
# Get from: https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=


# ── RATE LIMITING ────────────────────────────────────────────
# Max login attempts before lockout
LOGIN_MAX_ATTEMPTS=5
# Lockout duration in minutes
LOGIN_LOCKOUT_MINUTES=15


# ── NEXT.JS ──────────────────────────────────────────────────
NEXT_TELEMETRY_DISABLED=1






















# ============================================================
# VEXONMART — .env.local
# NEVER commit this file to GitHub — it's in .gitignore
# ============================================================


# ── DATABASE (MySQL) ─────────────────────────────────────────
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=vexonmart


# ── APP ──────────────────────────────────────────────────────
NEXT_PUBLIC_APP_NAME=VexonMart
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_TAGLINE=Shop Smarter. Live Better.


# ── JWT AUTH ─────────────────────────────────────────────────
# Generate with: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
JWT_SECRET=fb2b6219a7b06e5168a522f4ff7d24314ed84d15357088c131749b00d32d0a43dba542c4d69bb040a81a2935b856cb443bbe40593b74a5260cfe69af05601c13
JWT_EXPIRES_IN=7d


# ── ADMIN SECURITY ───────────────────────────────────────────
# Secret token required for admin API calls
# Generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
ADMIN_SECRET_TOKEN=a06d488b7d6c8144d3b58bcca8d2ff1eb627ed587ca502a8e8f7b240c6b8762d

# Comma-separated list of IPs allowed to access /admin
# Find your IP at: https://whatismyip.com
ADMIN_ALLOWED_IPS=127.0.0.1,::1


# ── STRIPE PAYMENTS ──────────────────────────────────────────
# Get these from: https://dashboard.stripe.com/apikeys
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_51...
STRIPE_SECRET_KEY=sk_test_51...
STRIPE_WEBHOOK_SECRET=whsec_...


# ── EMAIL (SMTP) ─────────────────────────────────────────────
# Option A: Gmail (easy for dev)
# Enable "App Passwords" in your Google Account settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ezejude625@gmail.com
SMTP_PASS=ezejude625@gmail
SMTP_FROM_NAME=VexonMart
SMTP_FROM_EMAIL=noreply@vexonmart.com

# Option B: Production (Resend, Mailgun, SendGrid)
# SMTP_HOST=smtp.resend.com
# SMTP_PORT=465
# SMTP_SECURE=true
# SMTP_USER=resend
# SMTP_PASS=re_your_api_key_here


# ── FILE UPLOADS ─────────────────────────────────────────────
# Max file size in MB
UPLOAD_MAX_SIZE_MB=5
# Where uploaded images are stored
UPLOAD_DIR=public/uploads


# ── CLOUDINARY (optional — for cloud image storage) ──────────
# Get from: https://cloudinary.com/console
# Leave blank to use local file uploads instead
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=


# ── PAYPAL (optional) ─────────────────────────────────────────
# Get from: https://developer.paypal.com/dashboard
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_MODE=sandbox


# ── GOOGLE OAUTH (optional — for "Sign in with Google") ───────
# Get from: https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=


# ── RATE LIMITING ────────────────────────────────────────────
# Max login attempts before lockout
LOGIN_MAX_ATTEMPTS=5
# Lockout duration in minutes
LOGIN_LOCKOUT_MINUTES=15


# ── NEXT.JS ──────────────────────────────────────────────────
NEXT_TELEMETRY_DISABLED=1
