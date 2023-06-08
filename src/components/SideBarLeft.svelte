<script>
  import { slide } from "svelte/transition";
  
  let headerOpen = false;
  let summaryOpen = false;
  let skillOpen = false;
  let workOpen = false;
  let projectOpen = false;
  let education = false;
  const toggleHeader = () => (headerOpen = !headerOpen);
  const toggleSummary = () => (summaryOpen = !summaryOpen);
  const toggleSkill = () => (skillOpen = !skillOpen);
  const toggleWork = () => (workOpen = !workOpen);
  const toggleProject = () => (projectOpen = !projectOpen);
  const toggleEducation = () => (education = !education);
  let newName = "";
  $: console.log(": " + newName);
</script>

<div class="sidebar-left">
  <div class="top-bar">Editor Panel</div>
  <div class="panel">
    <button on:click={toggleHeader} aria-expanded={headerOpen}
      ><svg
        style="tran"
        width="30"
        height="30"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
      >Header
    </button>
    {#if headerOpen}
      <ul transition:slide={{ duration: 300 }}>
        <li>Name:<input type="text" bind:value={newName}></li>
      </ul>
    {/if}
    <button on:click={toggleSummary} aria-expanded={summaryOpen}
      ><svg
        style="tran"
        width="30"
        height="30"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
      >Summary
    </button>
    {#if summaryOpen}
      <ul transition:slide={{ duration: 300 }}>
        <li>entry</li>
      </ul>
    {/if}

    <button on:click={toggleSkill} aria-expanded={skillOpen}
      ><svg
        style="tran"
        width="30"
        height="30"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
      >Skills
    </button>
    {#if skillOpen}
      <ul transition:slide={{ duration: 300 }}>
        <li>entry</li>
      </ul>
    {/if}

    <button on:click={toggleWork} aria-expanded={workOpen}
      ><svg
        style="tran"
        width="30"
        height="30"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
      >Work Experience
    </button>
    {#if workOpen}
      <ul transition:slide={{ duration: 300 }}>
        <li>entry</li>
      </ul>
    {/if}

    <button on:click={toggleProject} aria-expanded={projectOpen}
      ><svg
        style="tran"
        width="30"
        height="30"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
      >Projects
    </button>
    {#if projectOpen}
      <ul transition:slide={{ duration: 300 }}>
        <li>entry</li>
      </ul>
    {/if}
  </div>
</div>

<style>
  .sidebar-left {
    width: 400px;
    height: 29.7cm;
    background-color: #f0f0f0;
    top: 5pc;
    position: absolute;
    border-right: 1px solid black;
  }

  .top-bar {
    background: red;
    height: 50px;
    text-align: center;
    padding-top: 10px;
    font-size: larger;
    font-weight: bolder;
  }

  button {
    border: none;
    background: none;
    display: flex;
    justify-self: center;
    color: black;
    font-size: 20px;
    cursor: pointer;
    margin: 0;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
    width: 100%;
  }

  svg {
    transition: transform 0.2s ease-in;
    position: static;
    margin-right: 0.5rem;
  }

  [aria-expanded="true"] svg {
    transform: rotate(0.25turn);
  }

  .panel {
    color: black;
    margin-left: 3px;
    border-bottom: 2px solid grey;
  }
</style>
