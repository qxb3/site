<script>
  import '../app.css'

  import Nav from '$lib/components/Nav.svelte'
  import { fly } from 'svelte/transition'

  let { children, data } = $props()
</script>

<Nav {data} />

{#key data.url}
  <div
    class="theme"
    in:fly={{ x: -window.innerWidth, duration: window.innerWidth / 2, delay: 400 }}
    out:fly={{ x: window.innerWidth, duration: window.innerWidth / 2 }}
  >
    {@render children()}
  </div>
{/key}
