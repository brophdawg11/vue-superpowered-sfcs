<i18n>
[
    "hello",
    "world"
]
</i18n>

<template>
    <h1>{{ $t('hello') }} {{ $t('world') }}!</h1>
</template>

<script>
export default {
    name: 'HelloWorld',
};
</script>

<style>
body {
    padding: 4rem 0;
    text-align: center;
}
</style>

<style theme="default">
body {
    background-color: #FFFFF0;  /* Ivory */
    color: #212121;             /* Dark Grey */
}
</style>

<style theme="dark">
body {
    background-color: #212121;  /* Dark Grey */
    color: #FFFFF0;             /* Ivory */
}
</style>
