<script lang="ts">
  import { FrontBasic } from "@gonzo-engineering/dummy-ui";

  let { data } = $props();

  const { section, articlesInSection } = $derived(data);
</script>

<svelte:head>
  <title>{section.label} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
</svelte:head>

{#key articlesInSection}
  {#if articlesInSection.length === 0}
    <p>No articles found in this section.</p>
  {:else}
    <FrontBasic heading={section.label} articles={articlesInSection} />
  {/if}
{/key}
