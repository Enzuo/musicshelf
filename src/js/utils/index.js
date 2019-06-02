export function extractMusicFromVideoTitle(vTitle){
  if(!vTitle){
    return null
  }

  // Perfect Run
  // Crooked Colours - Perfect run
  // Crooked Colours - Perfect run (official video)
  // Perfect run (official video)
  // Kendrick Lamar, SZA - All The Stars
  // OrelSan - Paradis [CLIP OFFICIEL]
  // Childish Gambino-Heartbeat(Lyrics)
  // Therapie TAXI ft. Roméo Elvis - Hit Sale (Clip Officiel) (1/3)
  // FAUVE ≠ LES HAUTES LUMIÈRES
  // Ben l'Oncle Soul « I've got you under my skin » (Frank Sinatra cover)
  // Redbone Childish Gambino (Lyrics)
  // The Connells - '74-'75
  // The Weeknd - I Feel It Coming ft. Daft Punk
  // LSD - Thunderclouds (Official Video) ft. Sia, Diplo, Labrinth
  // Lady Gaga, Bradley Cooper - Shallow (A Star Is Born)
  // Mark Ronson, Lykke Li - Late Night Feelings (Audio) ft. Lykke Li
  // Parcels ~ Overnight
  var vTitleArr = vTitle.split(/-|\(/);

  if(!vTitleArr){
    return null
  }

  var title = '';
  if(vTitleArr.length === 1){
    title = vTitleArr[0]
  }
  title = vTitleArr[1];
  var author = vTitleArr[0];

  return {author : author, title : title, feats : '', favorite : false, ktv : false}
}
