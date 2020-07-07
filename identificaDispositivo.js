window.onload = desktopOuMobile;

// Assim que o site é carregado, é executado o evento acima para identificação do dispositivo. A função abaixo localiza o CASO e aplica um link diferente para cada dispositivo;

function desktopOuMobile() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    var linkDoApp = document.getElementById('teste');
  
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
        linkDoApp.href = "https://aprovado.firebaseapp.com/criar-conta";
        return 'iOS';
    }
    else if( userAgent.match( /Android/i ) )
    {
        linkDoApp.href = "https://play.google.com/store/apps/details?id=net.aprovado.gobrain&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";
        return 'Android';
    }
    else
    {
        linkDoApp.href = "https://aprovado.firebaseapp.com/criar-conta";
        return 'Outro';
    }
  }

console.log(desktopOuMobile());

// Basta alterar os links para o direcionamento correto ou manipular o bloco para executar alguma função;

/*
  Item 1 - iOS
  Item 2 - Android
  Item 3 - Desktop/Outros
*/