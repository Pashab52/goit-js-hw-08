import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

STORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');

function playerCurrentTimeRestore() {
  const onPlay = function ({ seconds }) {
    localStorage.setItem(STORAGE_KEY, seconds);
    // console.log(localStorage.getItem(STORAGE_KEY));
  };

  player.on('timeupdate', throttle(onPlay, 1000));

  const playerCurrentTime = localStorage.getItem(STORAGE_KEY);

  // якщо прибирати if то помилки немає тільки коли є цей додатковий код на setCurrentTime :
  // .then(function (seconds) {
  //       // seconds = the actual time that the player seeked to
  //     })
  //     .catch(function (error) {
  //       switch (error.name) {
  //         case 'RangeError':
  //           // the time was less than 0 or greater than the video’s duration
  //           break;
  //         default:
  //           // some other error occurred
  //           break;
  //       }
  //     });
  // а без нього і без if то вже непрацює)

  if (playerCurrentTime) {
    player.setCurrentTime(playerCurrentTime);
  }
}

playerCurrentTimeRestore();
