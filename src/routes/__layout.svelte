<script>
    import data from '$lib/data.json';
    import { writable } from 'svelte/store';
    import { page } from '$app/stores';
    import { fade } from 'svelte/transition';

    const filter = writable('');
</script>
<div><h1>Welcome to FloodGuide, a list on flood risk around the world </h1></div>
<section>
    <datalist id="countries">
        {#each data as item}
            <option value={item.name} />
        {/each}
    </datalist>

    <input type="text" list="countries" bind:value={$filter} placeholder="Search..." />
    <ul>
        {#each data.filter(item => item.name.includes($filter)) as item}
            <li><a href={`/${item.name}`}>{item.name}</a></li>
        {/each}
    </ul>
</section>

{#key $page}
    <div in:fade>
        <slot />
    </div>
{/key}
<div><h1>You can help by either fight flooding by either <a href= "placeholder.com"> donating</a> or <a href = "placeholder.com">answering our quiz </a> </h1></div>
<style>
    * {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    section {
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    ul {
        list-style: none;
        margin-top: 2em;
        padding: 0;
    }

    li {
        margin-top: -1px;
        border: 1px solid #ddd;
        background: #eee;
        display: flex;
    }

    a {
        text-decoration: none;
        color: #000;
        flex-grow: 1;
    }
    h1 {
        display: flex;
        align-items: center;
        margin: 0.75em;
    }
    a:hover {
        background: rgba(0, 0, 0, 0.12);
    }

    input,
    a {
        padding: 0.5em;
    }

    input {
        margin-top: 4em;
    }
</style>
