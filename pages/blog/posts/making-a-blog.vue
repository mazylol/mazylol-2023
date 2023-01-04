<script setup>
const title = 'Making a blog!'
</script>

<template>
    <Head>
        <title>{{ title }}</title>
    </Head>

    <article class="post">
        <h1>{{ title }}</h1>
        <h3>September 28, 2022</h3>
        <p>
            I finally bit the bullet and did it. I have always thought about make a blog but I was
            never really sure where to start. I thought about making my own blogging
            framework-of-sorts using SvelteKit and a markdown parser. However, I do not have enough
            dedication to do that.
        </p>
        <p>
            Then today I thought about it some more and almost fully committed to using Ruby on
            Rails. Which would be completely overkill for what I need. Then I remembered that Jekyll
            exists and now we are here.
        </p>
        <p>Still not completely sure about how Jekyll works but I am getting there.</p>
    </article>
</template>
