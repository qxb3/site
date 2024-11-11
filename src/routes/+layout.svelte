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
    in:fly={{ y: -window.innerHeight * 2, duration: window.innerHeight, delay: window.innerHeight }}
    out:fly={{ y: window.innerHeight * 2, duration: window.innerHeight }}
  >
    {@render children()}
  </div>
{/key}
