import {createGlobalStyle} from'styled-components';
export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1597629260784'); /* IE9 */
  src: url('iconfont.eot?t=1597629260784#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABTwAAsAAAAALXwAABSgAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCOSAq3FKxMATYCJAOCUAuBKgAEIAWEbQeIYBvCJmUEbByAMF4bKYryvGmy//+QwIkMC2qg268MhkmlBmFnp9JoJgEJFofmCfizLp9pJVfIgzKgl0EyCLJa93vaMwjYmzh48eKCgKGOyWbO0HVB+lZf69r/F2POd4dS8vC036dn3swSYoBBhVVYqNqq1ghA4cmJzb+l43HOv+S1RXzaDtFZiksnjOIFkiAmM0nmMO2YFWZKMvNug8HmzNuy74J80zc1pwWXXqsCA0a388Doim8bW+YR0IMdFHpCjaoVkgrt+3eFJQOZX04/U36rqdSA+F+BN/wOpVTqWUtPtnKyVlmtfhkehoNQAEwAy6WuFNgByRAEKg+02gN8P7In45Db+/YzBFSle6KuCXzvTShFTWKQyt07fwqbmaEb7DizQjsC5n/OtJcjzk6NICMUajdhZqfc/z/JtT/QNGl7yDlM2kE7QLJACiX+4QHQPKDamwJUE37KoBcz1g96aO2XPxJJhESfEMLtoXv7kIdKFdF0lEpqNNV6EVGdoyP8a1kRjFENxiZ56qKZhVHMYePA/Iq2SWg2blU6f59Cg7mCCAnLvfXVpWCecCgFdNJoq2fUWaRvQaqx+pp8xzf0/ad/bCdzKnUZqfL2m/gKUB2Q9+rgMa/AfsA1l4J9XWSsopCPM/OqfTkoXZU1X9VS0RfcfSpSvQdkmrMWTV6f1W091E+bvv36d/8HMU8IqWSSRyXVNNACxxq28JiNToMtt8o6G13gUjs9dJN+TIPxNQQ81F8BxLTJpMNSSNfSRK2mHgUdutIausXFgQd/LpKS3H/GlxdQQBUFlE1bpcEC6+hNtlFaqjNIR3c7SJ8k/Id5Z4AmWVGnXqMGyYgxo8a1qkyYNGXajFnDOs2Z12bBon4DBg1ZsmzFqjXrNmzasm3Hrj372h1y2BFHHXPcCSedcpqDM2az1q1Hrz7nzBVvngRqiZLEuSZFqjTpNDJksnSPnRZSPXi0QnFHDuEBOCBta6Iyg2XIHFYgC1gdZAmrh3xQ4JMGhep6DUh8CYQRattgjNohGKX2KYxT+wpaqX0NFbVRm4B+hk1Cf8GmoL9h09D/gBmCgFmChGECQScxDeaIkEJWyYA2IgUWiFRYJNKhn9DAAJEBg0QmDBEsLBHZsEzkwAqRC6tEHqwRhbBOFMEGUQybRAlsEaWwTZTBDlEOu0QF7BGVsE9UQztRC4eIOjhM1MMRogGOEk1wjGiG40QLnCA4OEmshlPEGjgNYgt0EY/gDIjHcBbES2glvoFu4lvoIb6DXuJ76OPvmXAO/B1s56Fy2AWoEnYRqoJdgmpgl6Fa2BWoDnYVaoSdglpg16BW2HWoDXYDmg+7CS2A3YIWw25DS2B3oKWwu1AnrBk6CLsHHQJ08E/SAS3gvnvHT8BfoGGH5i/IYPUdtfxsTLWquU6JOZjJKvY5eqqqdFeFbbTD6C5Gyk3k7N5UlGMiwQt/SqxY/0zpWm4S4FSlfL87tVrbSOQN/d3Zortqp7XJQtJt78W2bGDNudQXmVFDq61iGxqsJBJcYSWTWVqbT+ibNTk2bz23tTi+KiT5mYIbYiHIMk/bvglrzCaXBjN0XWUmM7O2zzVmK7Nlj9naSluQ/Vvt7gV7MaKk2qC1deetJM8Wzv41fi+9iNEkiAxQOUWFEP83TI2W1QawxjOg14R6DGFWfL1M4KGyqv5F9Cxa+uU1afyEhOmYKrPT1ELlhcLSpEruezuu8WENXa6jwvJSBHBVef0V+mNa4MjQdg9wSL4fGO1+KxmPPxmSf4aLeLvZrKNXPdYyg4EnOw9hbUGH76Blh+E5iPaQnefJQf2a1cI+hZFvKVhwgmS/q9wiK47iLf2cyVhw0Mq9qv7h566tgcvX8YTbTl+/33DSAbZyr50xV6OLw64KbyQX9PbQPjt+FFyAjCS69TccH5+Y6DIuzzYeRI9JLVVpj7fd2S/43Ln7nJunA4O6Yoy2/MXh0NHmxj/oiuFQxl9CU/0568bDWZFdsJfrNb7Y0WxnRa+0F6n9c80FfwUuJZIKkFwkpWmvnix8ZvNq2SpHjb4tcD7fjjPu3Cl3v/UmmnfvTgouk9oYlR5/zFS71GOS8+xfjfRDw6F4U+tlmM5+aD6PHcn6Ea+nUoDyzCiXdVTOlIo+a5mC2UiltqhHjmh+uL6lBLBTCwOHunWAUaWbNMYUeKjjoHwA4lpVAfqZcBzzuBTXUq+TrCyXLBh9ChX4rSwdZYFwyvX0MFp7KHccBC0PydxHnv1oxF8ju3ejZT2IWCq8I8DvlkxsxN8XWGyovByfXju1NH1N1DRqTCfTuL198CE1qwcvPwxPPbLiGMliTnin8vg+ef3EqDx/O9WB+Ce0DSJaxTB9RBwSxE1+CR66i0V9jqb4Ib2aniMhzwdvtno3dFYuzmJz1oNHh3uJNFdWcsEtJioKTbgpHQEVlcnhYErW5sAKYtBoXHG6gVanNR6BFd27aHVcpQ0aQadnwKSJVjrdYHU9hyfVIDDy2l4Oz2pBr+UZDWxhmOLZIbdESlOcv3tZYeE14U3qSEUojl0MXfrYtFGYZM8s2EUTvTLb8PC962Mb0vQkF9g3rNkLBfyS3CBrqhZDnVEl1c2qQQ9kxM22z0eXOi5DP8Twg3hmU6uNPZ32T8uOoNNPWYkkrbMJauJUssKiCqjLRQYrK5dIdXdO3bAbG9UqrtJ90tAe9YEmFJ8mqfrQ3kszLw2BRTMI8QHy11CjSIKp2h7iAwDXOu4XRbeDWTDm1kYQbBOH3w1kYtzyahWk+RzFh6WcKUF3kqAjNj8lcEobEuOeLOTh3UWbWM8taqPNblXXJNxvJLFqr6NMN7CYWP/nSWYHsdnCrfJyabpgbfZAW++1TNtTmncZ8Mx0Os0khaSImY1lMoczBHP7yryiOvbTclKQejdnjJTUKFR7FAcyjJVXxLWbl1RkbUpRlAIdiUwFipOgGBTZ1xSGjlTURWBKTfejVekoin0CxCuXiJhdYaJebWKwEk2V0hBVoqFUkZI1SxWRSqQnoOMQmBGzBRrSnZCXjqbtkYRDFagN74q/VeFeouYDtyrzaCn3lCmmFYvr9ikqmjRqwVhT6TitzAhYz38i+WB85uOX4plC5JSSw3L8WW5RJ1CH1+iGY+KJ8EdUhyac9SLDCTV7elIE+vLTYCp7dgrP27NAzn/w9+HR+/Ku5N557f2LeXSAAYMANN7E6FevjXL5oIOl0/R+GzcHT8ahkPPes9+Ro1evopjFfp/fuAF//QPYtE+c2CH3UOj+x9mMdoWHvGPixHYb0DrbxlPRIdXsHYpt6HJy7JjS0fUu2DrbOka3O7Vvpyh0g61Xb2x0MOsUgYouRyeAAviHCIS5t6rtwWpLm1k1AQ7Hxdp5he2WJaVrGCKcjgzssyidlOim8iRz5S1/f5Waq94e/ddi371/WIaewjSNyX9d6uij57XBOo+wCmvVFO1KxM96wIwPWgi3GgJLVtgnTxtvr8psatN8e+yQ1vXxriB0/cqXqW5eoloavvtt7La/nmfYDkRa+Q/vnk1kAo7bS3xz1nv7zB0V9iuyeI2bw4KSD9yXj/ugnpUSNbmVBR4ocUFq2z/zVoUtj64d9Vr3+We6ZtvKSGWNS2vOnMUakj9PnBy9ejSo1uKrZY8fNy8cP0X03+Gum6sL/IVL2wSvz3bP6rrUpuoeHA5evi1z2CU6kAaZBqcYj+kFdbG6h756v3p/tU8UlfSM0qFof6x+qnhCNHC8kjdSPPAG7FQPFAYGaPxAZASBAYbxdQi8DOwkFzxE2J/e9kUWQzHCTFZge3paMQMCJWQ7cY/ACJgzCkYIyTQKKpxlrEIXfM31doHL42cHrHDQB00rrPQqeN9RTRQXE2oCQ8cSVXUqQc94FVRMLYjXOwSsWKckj/HCemE6j1i8mMgjMHTWiwxDVyRjYxLQV8bG1oPhby3Z10fCqh0QFqOJMBMfRUPv0FH+xImposiTq06fWoUIl7p1FfApg/xpnU/7s7kdkelwDL17CwRwFc9fma7Vv92VfQ0CLzJsDoco94Gw2zgFdjwMHf2DO3vjvZM2MPAM+0UNF2uUgaQBTXsRguCkcMKbgl/AxPACx7eHZ8ANtb0ncXOTvCN7bhG6UM9Ai9wmWXiO54x3m2fG5HPxkg26Z4smN6yBHLb5S7uUUP9MH2bbju096TN/Cu1IetvrmKKEx41rFk+aW+HCWyRbd4XcJUlR+s7VFX673/Bh9ocNe/fs7febtRfu30q1yt1zZKOu3VaaNmNC2oQyG3a/O0qZGpZlqBOksgjVaEJl0tuF5Gtgnfrg9nOztbJvP3jngFZ/b8j+H6iKqEAb0OsZgOkZZKLm5bNcUv4sLzcvz6g571VPt6l7D8My0IvDy/3C7SoqiDVryQpyQf8XJzuHhhq4sskFZMW3iW67g4K6N15+SuTCrMwMFeGWGeaocaxkNxXxzIZZRO7/8YBt3z5kBVHfbSDwEogAIFIp0J1mN1KNTcSDdlLjYHA0hejZ1bWg16wX5ZUbT/uG0Z2hX5bWUuYldi2TbrYILTdl+xuWyGup0i9D6c4wXzo3nsuvZZEy4x6vsawsO7spj9EhBaUAQuRhpQT720zvn2hm6TAoly9GIsL+vOP+PZx3kX0mgIGDWvyVsoHAGYYwboRpkRWZfjOywBkYluHw4NTKkyU2c3Gon2heHb7AFFdnAR73Ai2wRgp+6cXPo0l/r2A4bc01MSYwsSYjrWSUPBg54DhggLVVLLRtpunCUE1pwkIFEVqiIUzieQZci/s2XiKX2KCwzu21jjYv916Xcqx9cry951wGvGG9hQZiu5ZsIOuNG3YwUusZYZJ7tYjAvGBVDPz54Qf6Dz78Qs6ykybp5cOy33+gHVy/jnp9z7KAuTrMnF+BgTCHAWbXqXoQkMFHROT+mfNHxNO4GyC2A5QDvZx5tofFNdVOdTZWNF5OhxJy8/Ena1xzipwWdLXJmSdPnvKRXK9ePVKckz0+PpwdT/VgDskADjcg7jJRrY7ac1XsRBWBwXHPWeN6/Am5uTEzUBgEo8HqEgRfdt7j+TH57fHjc9yGvcY8/690G8saS1qenJX8hsZtYS9LKahw8YvArFNkBWdUL1r6GiN8rcwEYC04ZtlNg8MjxIO2bTjQgbrMQBm0XAgcbfLHkgcI+1M39ECCPXummGgQREakOUFgBepoEhlgBJw2gciKwJvTmFhB6DEcSGP2vTDuZ/3UUFxCJHyrActUUgxqQcw39h4h/joXvo3A4CQcTufPc0fHfZsxZGrUaql0yhrqCyEZotnwsJ4mVj0Us2+EvKOwCQorPSxEYDWB578PazY8cpumARsSqK4TQOCweVsox/WkXkc2dHQIsL/d/w1I0JuCQRItAIpiTSaWZ2ayPM+aMObjDo4zU8Fg8JwmjhGBH0iMngUjc+oReJPdXJg/CMbEbccWR5YFJ2jJ3j6kJXB1WnIJcXGLS0uuYzJXSMPKULeT2wNEdQ1kSP4Mj/Z2ioJjVc82kNBnA7bGwAU4owyw2zDwDPBr+RFbvwuxLrHe5+zuKdStJWR876mwj/E+D+kq1BrFPfC76G0niY9XqSaW0EzgMGnFGICNSERKAIBMiMUwPzJ0CfI8eYeIYkg/gG+gLpSklfahByiRlSaS57AYjyAJ42QGS5p4djR1JYtFcUpCTIPKA2md5GaaIZIbWAHKOBNhsrJk9SCe17mmZsCbEUaf0+aRD3GSTuTaZSTJs7zyT1V4amHxBtQDjihYNTJbVd6jnwiVyLshUFMbFLFdbyeKcEnch3YiFc3C6GEX3CcpAM6QJ7EsqnaRf6gK6tcQf44OIhcRLKJgoeou2CkbDYDgRBPZZ2w+Xb8L2zjVbtDV+qLLPOWrJpL3oSIwyt8hHin///t9CjqeeKrz2/o3c1kAgA8Kxq3n4c2GaU4zV70SiIbR/3Y5zu0ktwTipMvl74DdLCAAWmcOAJCA5XM/8P/mrHH+TYE8kRu5uDHB7RlSgzEGaTRLSYJWGakWu4xMo1OMpRUP9VvpIZ5LpQmg/NKYpNNvptLudybr9IcqQX+ZOv3+M/U6E2KaPUxQE1vMp9rFJCCFrdpL5Q1Hp0Rd+Mt/RlcCSTyBjvsOyb6wujlcpyseECFNVJOP3a2qq5zwUN1r7UMIXCXhHzB66FXT3dWVY3XjYHh4snCOAKLAqrQu7oKewSJ3crXIvPvPoFMERAo2el3wOxCZv/LKjYNrDupBjFwbFcU3O+rcUl13Km6/LBtU7vUUCM9SVknsu/0AhjroK+jJnSt9Z45XPHQvD18CTgPAEqmdjgBSTiXVpfrUkBpT0x+84J/mcPprN/uXpjcHhGAExXCCpGiG5XhBlGRF1XTDtGzH9fwgjOIkzfKirOqm7fphnOZl/YHrcR/ndT+er/fn+/vv/O1JfQaJ6Xfal6GtS6q5aPARC4pdQG35FJdhufiu1zygdKcz1FrSOkJBGfVQsjdzUmvehY9sScYg58Q+6iT7LlJYHz1OlnLfMolde9NQzsXkAVGnQvHRx27PuEMuIlyibbKL32YIQtZz0xbVuptrephH2Gnvs7JcxoOPJS+IXzz1lw9RH6UlWMGl2SWlpHlXYuHiAnQWF2DP4vRCKGnU84BJ5yWT3O5yac7Jo2c+UxtgZxk/C6LBqGTI1JvGsEXPUyzCuYONY8ERsnJ0ZPGKmp2bxfCCZ7UO2lBKS15cDwD7GomqPnZ51DHbjfZAR1kbwclHu43DRs0nEjtO1K64cNmK+M1LNkFqjBcT0DgfhBRe550k0MUURkdhfmOrybs31OBrR75tnRBqRbiNAnOaOSU1R8xHQ8DLaiZC0fIwijjrKA0Wiet55FAGNJPAReizpclZXmbmGopianjQopbIMT3p1F6kbQPexOVmObZ4lELJYxNAMjKcLiPHwU5K9NA8YpdeXhNZJ2CcYOCjp8A2uGCeoYl3a1oyj9NEUUp5z0BiInUquwwvYWV71koy0bDdDEWDUF+q8yKrL6EOC1dCyEaAuA1NNc5eV2dXIB7ULpKm91TgBLmfqGbx8XHECXGcexI8AQA=') format('woff2'),
  url('iconfont.woff?t=1597629260784') format('woff'),
  url('iconfont.ttf?t=1597629260784') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1597629260784#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-search:before {
  content: "\e6d1";
}

.icon-thumb-up-outline:before {
  content: "\e8e6";
}

.icon-angle-down:before {
  content: "\e607";
}

.icon-angle-right:before {
  content: "\e608";
}

.icon-angle-left:before {
  content: "\e609";
}

.icon-angle-up:before {
  content: "\e60a";
}

.icon-netease-music:before {
  content: "\e650";
}

.icon-icon_Music:before {
  content: "\e62d";
}

.icon-accesspoint:before {
  content: "\e602";
}

.icon-signal:before {
  content: "\ea92";
}

.icon-viewdashboard:before {
  content: "\eb4a";
}

.icon-ic_assessment:before {
  content: "\e8e5";
}

.icon-ranking:before {
  content: "\e94b";
}

.icon-ic_surround_sound:before {
  content: "\e967";
}

.icon-ic_insert_chart:before {
  content: "\e9cf";
}

.icon-ic_radio_button_checked:before {
  content: "\ea9f";
}

.icon-history:before {
  content: "\e903";
}

.icon-minus:before {
  content: "\e98c";
}

.icon-arrow-down:before {
  content: "\e9e7";
}

.icon-arrow-left:before {
  content: "\e9e8";
}

.icon-arrow-right:before {
  content: "\e9e9";
}

.icon-arrow-up:before {
  content: "\e9ea";
}

.icon-menu-down:before {
  content: "\e94f";
}

.icon-menu-left:before {
  content: "\e950";
}

.icon-menu-right:before {
  content: "\e951";
}

.icon-menu-up:before {
  content: "\e952";
}

.icon-home:before {
  content: "\e902";
}

.icon-github:before {
  content: "\e732";
}

.icon-shuffle-disabled:before {
  content: "\e89f";
}

.icon-sequence:before {
  content: "\e88e";
}

.icon-user:before {
  content: "\e8e0";
}

.icon-ic_code:before {
  content: "\e8ef";
}

.icon-ic_delete_forever:before {
  content: "\e8f2";
}

.icon-favorite-off:before {
  content: "\e8f9";
}

.icon-favorite:before {
  content: "\e8fa";
}

.icon-ic_get_app:before {
  content: "\e8fe";
}

.icon-delete-mini:before {
  content: "\e901";
}

.icon-settings:before {
  content: "\e926";
}

.icon-good:before {
  content: "\e935";
}

.icon-ic_fast_rewind:before {
  content: "\e94c";
}

.icon-ic_fast_forward:before {
  content: "\e94d";
}

.icon-pause:before {
  content: "\e956";
}

.icon-pause-mini:before {
  content: "\e957";
}

.icon-ic_pause_circle_filled:before {
  content: "\e958";
}

.icon-ic_play_circle_filled:before {
  content: "\e959";
}

.icon-play:before {
  content: "\e95a";
}

.icon-play-mini:before {
  content: "\e95d";
}

.icon-ic_playlist_play:before {
  content: "\e95e";
}

.icon-playlist-menu:before {
  content: "\e95f";
}

.icon-loop:before {
  content: "\e960";
}

.icon-loop-one:before {
  content: "\e961";
}

.icon-ic_replay:before {
  content: "\e962";
}

.icon-random:before {
  content: "\e963";
}

.icon-next:before {
  content: "\e964";
}

.icon-prev:before {
  content: "\e965";
}

.icon-ic_volume_down:before {
  content: "\e969";
}

.icon-volume-off:before {
  content: "\e96a";
}

.icon-volume:before {
  content: "\e96b";
}

.icon-volume-mute:before {
  content: "\e96c";
}

.icon-comment:before {
  content: "\e96e";
}

.icon-ic_chat_bubble:before {
  content: "\e96f";
}

.icon-ic_chat_bubble_outline:before {
  content: "\e970";
}

.icon-plus:before {
  content: "\e97f";
}

.icon-clear:before {
  content: "\e981";
}

.icon-copy:before {
  content: "\e982";
}

.icon-fold:before {
  content: "\e9c7";
}

.icon-unfold:before {
  content: "\e9c8";
}

.icon-ic_music_note:before {
  content: "\ea29";
}

.icon-ic_remove_red_eye:before {
  content: "\ea34";
}

.icon-ic_arrow_back:before {
  content: "\ea63";
}

.icon-ic_apps:before {
  content: "\ea65";
}

.icon-ic_arrow_downward:before {
  content: "\ea66";
}

.icon-ic_arrow_forward:before {
  content: "\ea68";
}

.icon-ic_arrow_upward:before {
  content: "\ea69";
}

.icon-ic_cancel:before {
  content: "\ea6a";
}

.icon-close:before {
  content: "\ea6d";
}

.icon-ic_first_page:before {
  content: "\ea70";
}

.icon-fullscreen:before {
  content: "\ea71";
}

.icon-fullscreen-exit:before {
  content: "\ea72";
}

.icon-ic_last_page:before {
  content: "\ea73";
}

.icon-ic_menu:before {
  content: "\ea74";
}

.icon-refresh:before {
  content: "\ea77";
}

.icon-shrink:before {
  content: "\ea78";
}

.icon-open:before {
  content: "\ea79";
}

.icon-share:before {
  content: "\ea9e";
}
`
