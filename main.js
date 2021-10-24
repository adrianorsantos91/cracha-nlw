const LinksSocialMedia = {
  github: 'adrianorsantos91',
  youtube: 'channel/UC_-bzp81qnehuJH4J6VVrlw',
  facebook: 'adrianorodrsantos',
  instagram: 'adriano.rsantos_',
  twitter: 'Ars_Santos7'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()



/*ARROW FUNCTIONS
function nomedafuncao(argumentos, argumentos2){
  //code
}

(argumentos, argumentos2 => {


}*/
