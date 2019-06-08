export function extractMusicFromVideoTitle(vTitle){
  if(!vTitle){
    return null
  }

  // Perfect Run
  // Parcels ~ Overnight
  // Crooked Colours - Perfect run
  // Crooked Colours - Perfect run (official video)
  // Perfect run (official video)
  // OrelSan - Paradis [CLIP OFFICIEL]
  // Childish Gambino-Heartbeat(Lyrics)
  // Ben l'Oncle Soul « I've got you under my skin » (Frank Sinatra cover)
  // FAUVE ≠ LES HAUTES LUMIÈRES
  // The Connells - '74-'75
  // Redbone Childish Gambino (Lyrics)
  // The Weeknd - I Feel It Coming ft. Daft Punk
  // Kanye West - Flashing Lights ft. Dwele
  // Mark Ronson, Lykke Li - Late Night Feelings (Audio) ft. Lykke Li
  // LSD - Thunderclouds (Official Video) ft. Sia, Diplo, Labrinth
  // Lady Gaga, Bradley Cooper - Shallow (A Star Is Born)
  // Kendrick Lamar, SZA - All The Stars
  // Therapie TAXI ft. Roméo Elvis - Hit Sale (Clip Officiel) (1/3)
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
