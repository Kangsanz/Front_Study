<template>
  <footer id="footer">
    <!-- footer 상단 영역 -->
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="column footer-logo">
            <!-- footer logo -->
            <h3>Logo</h3>
          </div>
          <div class="column">
            <!-- site map -->
            <h4>site map</h4>
            <ul>
              <li><a href="#intro">Home</a></li>
              <li><a href="#myprofile">My Profile</a></li>
              <li><a href="#portfolio">PortFolio</a></li>
              <li><a href="#myskill">My Skill</a></li>
              <li><a href="#ourclients">Our Clients</a></li>
              <li><a href="#mytools">My Tools</a></li>
              <li><a href="#project">Project</a></li>
            </ul>
          </div>
          <div class="column">
            <!-- contact us -->
            <h4>contact us</h4>
            <p>
              A108 Adam Street<br>
              New York, NY 535022<br>
              United States<br>
              <strong>Phone :</strong><a href="tel:+82-10-0000-0000">+82-010-0000-0000</a><br>
              <strong>Email :</strong><a href="mailto:mymail@naver.com">mymail@naver.com</a>
            </p>
          </div>
          <div class="column news">
            <!-- news -->
            <h4>news</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <form>
              <input type="text" name="search"><input type="submit" value="search">
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- footer 하단 영역 -->
    <div class="container">
      <div class="copyright">
        &copy;Copyright <strong>MyPage</strong> .All Rights Reserved
      </div>
      <div class="credits">
        Designed By <a href="mailto:aaa@naver.com">MySelf</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',
  data () {
    return {
      msg: 'this is footer component'
    }
  }
}
</script>

<style>
</style>
