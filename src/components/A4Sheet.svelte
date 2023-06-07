<script>
  import SideBarLeft from "./SideBarLeft.svelte";
  import ResumeOne from "./ResumeOne.svelte";
  import SideBarRight from "./SideBarRight.svelte";
</script>

<div id="center-div">
  <div class="container">
    <div class="sidebar-left">
      <SideBarLeft />
    </div>
    <div class="page">
      <ResumeOne />
    </div>
    <div class="sidebar-right">
      <SideBarRight />
    </div>
  </div>
</div>

<style>
  #center-div {
    margin: 1px auto;
    display: flex;
    justify-content: center;
  }

  .container {
    display: grid;
    grid-template-columns: 0.1fr 1fr 1fr 1fr;
    grid-gap: 5pc 5pc 5pc 5pc;
    justify-items: center; /* Center items horizontally */
    align-items: center;
  }

  .sidebar-left {
    width: 250px;
  }

  .sidebar-right {
    width: 350px;
    height: 100%;
  }

  .page {
    width: 21cm;
    height: 29.7cm;
    margin-left: 150px;
    background-color: white;
    box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  }
</style>
