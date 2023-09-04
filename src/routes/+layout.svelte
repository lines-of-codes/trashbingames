<script>
    import { locale, t } from '$lib/translations';
	import { onMount } from 'svelte';

    onMount(() => {
        locale.subscribe((v) => {
            localStorage.setItem('defaultLocale', v);
            document.body.style.setProperty('--bodyFont', t.get('common.bodyFont'));
            document.body.style.setProperty('--headerFont', t.get('common.headerFont'));
        });
        locale.set(localStorage.getItem('defaultLocale') ?? 'en');
    });
</script>

<slot></slot>
