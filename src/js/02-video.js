import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

function playerCurrentTimeRestore() {
  const onPlay = function ({ seconds }) {
    localStorage.setItem('videoplayer - current - time', `${seconds}`);
    console.log(localStorage.getItem('videoplayer - current - time'));
  };

  player.on('timeupdate', throttle(onPlay, 1000));

  const playerCurrentTime = localStorage.getItem(
    'videoplayer - current - time'
  );
  if (playerCurrentTime) {
    // Зробив тут перевірку, але не дуже розумію навіщо воно тут, без неї теж все працює.
    player
      .setCurrentTime(playerCurrentTime)
      .then(function (seconds) {
        // seconds = the actual time that the player seeked to
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

          default:
            // some other error occurred
            break;
        }
      });
  }
}

playerCurrentTimeRestore();
