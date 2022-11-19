<script>
    export let user;
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown z-50">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    /></svg
                >
            </label>
            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li><a href="/partidos/primera-fase">grupos</a></li>
                <li><a href="/partidos/ronda-de-16">8vos</a></li>
                <li><a href="/partidos/cuartos-de-final">4tos</a></li>
                <li><a href="/partidos/semifinal">semifinal</a></li>
                <li><a href="/partidos/final">final</a></li>
            </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case text-xl">Qatar 2022</a>
    </div>
    <div class="navbar-center hidden lg:flex z-50">
        <ul class="menu menu-horizontal p-0">
            <li><a href="/partidos/primera-fase">grupos</a></li>
            <li><a href="/partidos/ronda-de-16">8vos</a></li>
            <li><a href="/partidos/cuartos-de-final">4tos</a></li>
            <li><a href="/partidos/semifinal">semifinal</a></li>
            <li><a href="/partidos/final">final</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        {#if user}
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span class="text-xs">{user.username[0]}</span>
                        </div>
                    </div>
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li><a href="/logout">salir</a></li>
                </ul>
            </div>
        {:else}
            <a href="/login">login</a>
        {/if}
    </div>
</div>
