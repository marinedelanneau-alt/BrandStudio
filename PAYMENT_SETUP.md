# Setup paiement + codes d'acces (Vercel + Stripe + Redis)

## Vercel KV
Vercel KV n'est plus disponible pour les nouveaux projets.
Utilise Redis via Vercel Marketplace (ex: Upstash Redis).

## 1) Installer les dependances
npm install

## 2) Ajouter Redis via Vercel Marketplace
- Vercel Dashboard -> Storage -> Marketplace -> Redis (Upstash)
- Connecter l'integration au projet

## 3) Variables d'environnement requises
- STRIPE_SECRET_KEY=sk_live_...
- STRIPE_PRICE_ID=price_...

Pour Redis (l'un des deux formats):
- UPSTASH_REDIS_REST_URL=...
- UPSTASH_REDIS_REST_TOKEN=...

ou (compat):
- KV_REST_API_URL=...
- KV_REST_API_TOKEN=...

Optionnel:
- APP_BASE_URL=https://ton-sous-domaine.vercel.app

## 4) Flux utilisateur
1. L'utilisateur clique "Souscrire a la formation"
2. Paiement Stripe Checkout
3. Redirection vers /success.html
4. Code genere automatiquement
5. Connexion avec ce code sur index.html

## 5) Test en mode test
- Utiliser STRIPE test key + price test
- Verifier success.html -> code genere
- Verifier index.html -> connexion OK avec ce code
- Puis passer en live
