var posts=["/2023/06/22/一起说话吧！/","/2023/06/22/你好S小姐/","/2023/06/22/嘿siri，北方有神明/","/2023/06/22/听说你有很多话/","/2023/06/22/写给五年后的陈先生/","/2023/06/22/妈妈说过，感冒要吃药/","/2023/06/22/是春天又不是春天/","/2023/06/22/未闻花名是我的谎/","/2023/06/22/星星总在亿万年前爆炸/","/2023/06/22/爱情二十八问/","/2023/06/22/好吃好睡，新年快乐！！/","/2023/06/22/寻找/","/2023/06/22/种种可能/","/2023/06/22/浴室的尽头是太平洋/","/2023/06/22/魔女想吃冰淇淋/","/2023/06/22/趁夜幕未降临/","/2023/06/22/糊涂大王探险记/","/2023/06/22/阻碍/","/2023/06/14/假如梵高是女性/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临！","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc39c5966.webp","color":"speed","tag":"生活"},{"name":"Tianli","link":"https://tianli-blog.club","avatar":"https://img02.anheyu.com/adminuploads/1/2022/11/11/636db0d451fd0.webp","descr":"惟其不可能，所以才相信。","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/11/07/6368520c9e4e7.webp","color":null,"tag":"技术"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };