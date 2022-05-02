<script>
    import supabase from '@/lib/db'
    import { onMount } from 'svelte'
    
    let posts = null
    onMount(async () => {
        const { data, error } = await supabase
            .from('post')
            .select('*')

        posts = data
    });

</script>

<h1>Template SvelteKit</h1>

{#if posts}
	{#each posts as { id, content }}
		<div class='post'>
			{content}
		</div>
	{/each}
{:else}
	<p>Loading ...</p>
{/if}

<style>
    .post {
        border: solid 1px gray;
        border-radius: 3px;
        padding: 20px;
        margin: 10px;
    }
</style>