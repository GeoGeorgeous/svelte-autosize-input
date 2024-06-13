<script>
  import '@/app.css';
  import { inject } from '@vercel/analytics';
  import { dev } from '$app/environment';

  inject({ mode: dev ? 'development' : 'production' });
</script>

<main class="mx-auto max-w-screen-lg px-6 py-12 lg:px-24">
  <slot />
</main>
