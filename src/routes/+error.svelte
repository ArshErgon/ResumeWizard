<script>
  import Footer from "../lib/components/Footer.svelte";
  import "$lib/global.css";
  import Navbar from "../lib/components/Navbar.svelte";
</script>

<Navbar />
  <div id="main" class="flex justify-center items-center">
    <div class="position-absolute top-50 start-50 translate-middle text-center text-[300px] text-bold" id="err404">
      404
      </div>
  </div>
<Footer />


<style>
   #main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #err404 {
   font-weight: 900; 
  }
</style>
