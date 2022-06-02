<template>
<header id="header">
  <h1 id="top-logo">
    <a href="index.html">XWOOD</a>
  </h1>
  <!-- 메인메뉴 -->
  <nav id="top-nav">
    <ul>
      <!--
        실습 1:
        아래 li 메뉴 리스트를 v-for를 사용하여 출력하시오.
        메뉴 리스트는 href, text를 data로 생성하여
        menuList 배열에 담고 반복문으로 출력
       -->

      <li v-for="(list, index) in menuList">
        <router-link v-bind:to="list.alink">{{index}}{{list.text}}</router-link>
        <!--
        실습 2:
        아래 li 메뉴 리스트를 v-for를 사용하여 출력하시오.
        메뉴 리스트는 href, text를 data로 생성하여 companySubmenuList, communitySubmenuList
        배열에 담고 반복문으로 출력
       -->
        <!-- company submenu -->
        <ul v-if="index == 0" class="sub-menu">
          <li v-for="list in companySubmenuList">
            <router-link v-bind:to="list.alink">{{list.text}}</router-link>
          </li>
          <!-- <li><a href="/introduce">Introduce</a></li>
          <li><a href="/ci">CI</a></li>
          <li><a href="/history">History</a></li> -->
        </ul>
        <!-- community submenu -->
        <ul v-if="index == 3" class="sub-menu">
          <li v-for="list in communitySubmenuList">
            <router-link v-bind:to="list.alink">{{list.text}}</router-link>
          </li>
          <!-- <li><a href="/notice">Notice</a></li>
          <li><a href="/faq">FAQ</a></li> -->
        </ul>
      </li>

      <!-- <li>
        <a href="company/introduce.html">Company</a>
        <ul class="sub-menu">
          <li><a href="company/introduce.html">Introduce</a></li>
          <li><a href="company/ci.html">CI</a></li>
          <li><a href="company/history.html">History</a></li>
        </ul>
      </li>
      <li><a href="product/product.html">Product</a></li>
      <li><a href="gallery/gallery.html">Gallery</a></li>
      <li>
        <a href="community/notice.html">Community</a>
        <ul class="sub-menu">
          <li><a href="community/notice.html">Notice</a></li>
          <li><a href="community/faq.html">FAQ</a></li>
        </ul>
      </li>
      <li><a href="location/location.html">Location</a></li> -->
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  name: 'header-component',
  data() {
    return {
      menuList: [{
          text: 'Company',
          alink: '/introduce'
        },
        {
          text: 'Product',
          alink: '/product'
        },
        {
          text: 'Gallery',
          alink: '/gallery'
        },
        {
          text: 'Community',
          alink: '/notice'
        },
        {
          text: 'Location',
          alink: '/location'
        }
      ],

      companySubmenuList: [{
          text: 'Introduce',
          alink: '/introduce'
        },
        {
          text: 'CI',
          alink: '/ci'
        },
        {
          text: 'History',
          alink: '/history'
        }
      ],

      communitySubmenuList: [{
          text: 'Notice',
          alink: '/notice'
        },
        {
          text: 'FAQ',
          alink: '/faq'
        }
      ]
    }
  }
}
</script>

<style>
</style>
