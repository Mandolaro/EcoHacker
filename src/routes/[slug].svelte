<script context="module">
    import data from '$lib/data.json';

    export function load({ params }) {
        return {
            props: data.find(x => x.name === params.slug)
        };
    }
</script>

<script>
    export let name, risk, damage, count, casualties;
</script>


   
<div class="overlay" />
<section>
    <header>
        <a href="/"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                ><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                    d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
                /></svg
            ></a
        >
        <h1>{name}</h1>
    </header>

    <ul>
        <li><strong>Risk:</strong> {risk}</li>
        <li><strong>Total namage:</strong> {damage}</li>
        <li><strong>Total number of floods:</strong> {count}</li>
        <li><strong>Casualties:</strong> {casualties}</li>
    </ul>
</section>

<style>
    section {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0.75em;
        background: #fff;
        box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.9);
    }

    .overlay {
        position: absolute;
        inset: 0;
    }

    svg {
        width: 1.2em;
        height: 1.2em;
        margin-right: 2em;
    }

    header {
        display: flex;
        align-items: center;
        margin: 0.75em;
    }

    h1 {
        margin: 0;
    }

    ul {
        margin: 1.5em 0 0 0;
        padding: 0;
        list-style: none;
    }

    li {
        padding: 0.75em;
    }
</style>
