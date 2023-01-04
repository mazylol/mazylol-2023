<script setup>
const title = 'Head Over Heels For Java'
</script>

<template>
    <Head>
        <title>{{ title }}</title>
    </Head>

    <article class="post">
        <h1>{{ title }}</h1>
        <h3>December 9, 2022</h3>

        <p>
            In the past month I have discovered the wonders of Java. After months of teetering on
            the edge I finally decided to dive right in. That is a choice that I will forever hold
            in high esteem.
        </p>

        <h2>Why I like Java</h2>

        <h3>Write Once Run Anywhere</h3>
        <p>
            I know it's been said a thousand times but it really is amazing. From the perspective of
            a dev that has mainly been developing in languages such as C, Rust, and Go it is nice to
            avoid the pain of compiling for every platform.
        </p>

        <h3>OOP</h3>
        <p>
            Now I will admit. I had no clue what OOP was or why I would enjoy it. I kind of got a
            slight grasp when I learned C# but it kind of escaped my mind. Now in Java I was forced
            to figure out what it meant. Now that I am using it and understand the concepts I have
            an appreciation for it.
        </p>

        <h3>Tooling</h3>
        <h4>Editor</h4>
        <p>
            With the help of IntelliJ IDEA the code practically writes itself. While this is not
            necessarily a feature of the language itself, it sure is nice.
        </p>

        <h4>Build Tools & Dependencies</h4>
        <p>
            Centralized dependency management is a hell of a drug. With Maven Central and Gradle,
            configuring a project and getting dependencies is a breeze. After using CMake, this is a
            breath of fresh air.
        </p>

        <h2>Pain Points</h2>

        <h3>Build Speed</h3>
        <p>
            Gradle can be a bit slow to compile. Especially on a machine with a lower core count. It
            is especially noticeable when you develop on GitHub Codespaces often.
        </p>

        <h3>General Finickiness</h3>
        <p>
            When not developing in IDEA I feel like gradle builds don't end up working like half of
            the time. Plus just dealing with
        </p>

        <h3>I like Vim and Emacs</h3>
        <p>
            I really enjoy terminal based editors. While I technically could develop with Java in
            them. It would be more trouble that it is worth.
        </p>

        <h2>So why don't I just use Kotlin?</h2>
        <p>
            I actually use Kotlin here and there. I just prefer the Java approach to things.
            Furthermore, Kotlin is not entirely mature in my opinion and it tends to have breaking
            changes way too often for my liking. Plus, while it is interoperable with Java, older
            libraries to not always end up integrating the best. Writing Gradle configurations in
            Kotlin is a mile ahead of Groovy though, so it can have that.
        </p>

        <h2>Closing</h2>
        <p>
            Closing I love Java. I imagine that was clear from my writing. I look forward to
            learning all that I can about it and using it to build some fun stuff in the coming
            months.
        </p>
    </article>
</template>
