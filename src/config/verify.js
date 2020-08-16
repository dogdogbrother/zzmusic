/**
 * 
 * @param {{content}} 需要校验的字符串
 * @param {{min}} 通过的最小长度
 * @param {{max}} 通过的最大长度
 * @param {{name}} 报错字段名称
 */

 /**
  * @description 校验长度
  */
const verifyLength = ({min=4, max=20, content='', name=''}) => {
  if (content.length < min || content.length > max) {
    return `${name}长度应为${min}到${max}之间`
  }
}

/**
  * @description 校验不能有中文和特殊字符
  */
const verifyEnglish = ({content="", name=''}) => {
  if (content !== content.replace(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g, '')) {
    return `${name}不能输入汉字`
  }    
  const re = new RegExp("[ ,\\`,\\~,\\!,\\@,\\#,\\$,\\%,\\^,\\+,\\*,\\&,\\\\,\\/,\\?,\\|,\\:,\\.,\\<,\\>,\\{,\\},\\(,\\),\\',\\;,\\=,\"]");  
  if (re.test(content)) {
    return `${name}不能输入符号`
  }
}

/**
  * @description 校验长度不能过长
  */
const verifyMaxLength = ({ max=14, content='', name=''}) => {
  if (content.length > max) {
    return `${name}长度不能超过${max}个字符`
  }
}

/**
  * @description 校验密码一致性
  */
const passwordSame = ({password="", affirmPassword=""}) => {
  if (password !== affirmPassword) {
    return `两次密码输入不一致`
  }
}
export {
  verifyLength,
  verifyEnglish,
  verifyMaxLength,
  passwordSame
}