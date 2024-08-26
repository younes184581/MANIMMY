document.addEventListener('DOMContentLoaded', function() {
    // Data for different mangas
    const mangaData = {
        'spy-x-family': {
            title: 'Spy x Family',
            cover: 'pics/spy-x-family-Manga.webp',
            description: 'A spy, an assassin, and a telepath must work together to maintain world peace.',
            chapters: [
                { name: 'Chapter 1: Mission 1', link: 'chapter.html?manga=spy-x-family&chapter=1' },
                { name: 'Chapter 2: Mission 2', link: 'chapter.html?manga=spy-x-family&chapter=2' },
                { name: 'Chapter 3: Mission 3', link: 'chapter.html?manga=spy-x-family&chapter=3' }
            ]
        },
        'takahashi': {
            title: 'Takahashi',
            cover: 'pics/takahashi.jpg',
            description: 'A gripping tale of mystery and action.',
            chapters: [
                { name: 'Chapter 1: Beginning', link: 'chapter.html?manga=takahashi&chapter=1' },
                { name: 'Chapter 2: Mystery Unfolds', link: 'chapter.html?manga=takahashi&chapter=2' }
            ]
        },
        'beatM': {
            title: 'Beat Master',
            cover: 'pics/beatM.jpg',
            description: 'The story of a young fighter mastering the ancient arts.',
            chapters: [
                { name: 'Chapter 1: The Challenge', link: 'chapter.html?manga=beatM&chapter=1' },
                { name: 'Chapter 2: The Training', link: 'chapter.html?manga=beatM&chapter=2' }
            ]
        },
        'kka': {
            title: 'KKA: The Dawn',
            cover: 'pics/kka.jpg',
            description: 'An epic journey through a dystopian world.',
            chapters: [
                { name: 'Chapter 1: Awakening', link: 'chapter.html?manga=kka&chapter=1' },
                { name: 'Chapter 2: The Rebellion', link: 'chapter.html?manga=kka&chapter=2' }
            ]
        },
        'kagura': {
            title: 'Kagura: Dance of War',
            cover: 'pics/kagura.jpg',
            description: 'A tale of a warrior who dances on the battlefield.',
            chapters: [
                { name: 'Chapter 1: The Dance Begins', link: 'chapter.html?manga=kagura&chapter=1' },
                { name: 'Chapter 2: The Battle', link: 'chapter.html?manga=kagura&chapter=2' }
            ]
        },
        'cipher': {
            title: 'Cipher',
            cover: 'pics/cipher.jpg',
            description: 'A thrilling story about secrets and codes.',
            chapters: [
                { name: 'Chapter 1: The Code', link: 'chapter.html?manga=cipher&chapter=1' },
                { name: 'Chapter 2: Breaking It', link: 'chapter.html?manga=cipher&chapter=2' }
            ]
        },
        'bloods-of-the-tracks': {
            title: 'Bloods of the Tracks',
            cover: 'pics/bloods-of-the-tracks.jpg',
            description: 'A dark and twisted tale of revenge.',
            chapters: [
                { name: 'Chapter 1: The Beginning of the End', link: 'chapter.html?manga=bloods-of-the-tracks&chapter=1' },
                { name: 'Chapter 2: Blood on the Tracks', link: 'chapter.html?manga=bloods-of-the-tracks&chapter=2' }
            ]
        },
        'punpun': {
            title: 'Goodnight Punpun',
            cover: 'pics/punpun.jpg',
            description: 'A coming-of-age story like no other.',
            chapters: [
                { name: 'Chapter 1: Innocence Lost', link: 'chapter.html?manga=punpun&chapter=1' },
                { name: 'Chapter 2: Growing Pains', link: 'chapter.html?manga=punpun&chapter=2' }
            ]
        },
        'firepunch': {
            title: 'Fire Punch',
            cover: 'pics/firepunch.webp',
            description: 'A fiery tale of survival and vengeance.',
            chapters: [
                { name: 'Chapter 1: The Flame', link: 'chapter.html?manga=firepunch&chapter=1' },
                { name: 'Chapter 2: Burning Desire', link: 'chapter.html?manga=firepunch&chapter=2' }
            ]
        },
        'homunculus': {
            title: 'Homunculus',
            cover: 'pics/homonuclus.webp',
            description: 'Exploring the depths of human consciousness.',
            chapters: [
                { name: 'Chapter 1: The Experiment', link: 'chapter.html?manga=homunculus&chapter=1' },
                { name: 'Chapter 2: Awakening', link: 'chapter.html?manga=homunculus&chapter=2' }
            ]
        },
        'nagumo': {
            title: 'Nagumo',
            cover: 'pics/Nagumo.jpg',
            description: 'A story of strength and perseverance.',
            chapters: [
                { name: 'Chapter 1: The Journey Begins', link: 'chapter.html?manga=nagumo&chapter=1' },
                { name: 'Chapter 2: Trials and Tribulations', link: 'chapter.html?manga=nagumo&chapter=2' }
            ]
        },
        'pumpkin-night': {
            title: 'Pumpkin Night',
            cover: 'pics/Pumpkin night.jpg',
            description: 'A horror story that will keep you on edge.',
            chapters: [
                { name: 'Chapter 1: The Night Begins', link: 'chapter.html?manga=pumpkin-night&chapter=1' },
                { name: 'Chapter 2: The Terror', link: 'chapter.html?manga=pumpkin-night&chapter=2' }
            ]
        },
        'record-of-ragnarok': {
            title: 'Record of Ragnarok',
            cover: 'pics/Record Of Ragnarok Vol_ 1 by Shinya Umemura Paperback _ Indigo Chapters.jpg',
            description: 'Gods and humans battle it out in this epic tale.',
            chapters: [
                { name: 'Chapter 1: The Call', link: 'chapter.html?manga=record-of-ragnarok&chapter=1' },
                { name: 'Chapter 2: The Battle', link: 'chapter.html?manga=record-of-ragnarok&chapter=2' }
            ]
        },
        'jjk': {
            title: 'Jujutsu Kaisen',
            cover: 'pics/jjk.jpg',
            description: 'A story of cursed spirits and sorcerers.',
            chapters: [
                { name: 'Chapter 1: The Curse', link: 'chapter.html?manga=jjk&chapter=1' },
                { name: 'Chapter 2: The Sorcerer', link: 'chapter.html?manga=jjk&chapter=2' }
            ]
        },
        '20th-century-boys': {
            title: '20th Century Boys',
            cover: 'pics/20th Century Boys (vol_ 20) by Naoki Urasawa, with the cooperation of Takashi Nagasaki, English adaptation by Akemi Wegmüller - BookDragon.jpg',
            description: 'A complex tale of friendship and fate.',
            chapters: [
                { name: 'Chapter 1: The Beginning', link: 'chapter.html?manga=20th-century-boys&chapter=1' },
                { name: 'Chapter 2: The Plot', link: 'chapter.html?manga=20th-century-boys&chapter=2' }
            ]
        },
        'dandadan': {
            title: 'Dandadan',
            cover: 'pics/dandadan.jpg',
            description: 'A quirky and fun manga with a twist.',
            chapters: [
                { name: 'Chapter 1: The Encounter', link: 'chapter.html?manga=dandadan&chapter=1' },
                { name: 'Chapter 2: The Truth', link: 'chapter.html?manga=dandadan&chapter=2' }
            ]
        },
        'vagabond': {
            title: 'Vagabond',
            cover: 'pics/Vagabond, Vol_ 1.jpg',
            description: 'The journey of a legendary swordsman.',
            chapters: [
                { name: 'Chapter 1: The Sword', link: 'chapter.html?manga=vagabond&chapter=1' },
                { name: 'Chapter 2: The Path', link: 'chapter.html?manga=vagabond&chapter=2' }
            ]
        },
        'csm': {
            title: 'Chainsaw Man',
            cover: 'pics/csm.jpg',
            description: 'A wild ride of action and dark humor.',
            chapters: [
                { name: 'Chapter 1: Chainsaw', link: 'chapter.html?manga=csm&chapter=1' },
                { name: 'Chapter 2: The Hunt', link: 'chapter.html?manga=csm&chapter=2' }
            ]
        },
        'tomodachi-game': {
            title: 'Tomodachi Game',
            cover: 'pics/tmg.jpg',
            description: 'A game of trust and betrayal.',
            chapters: [
                { name: 'Chapter 1: The Game Begins', link: 'chapter.html?manga=tomodachi-game&chapter=1' },
                { name: 'Chapter 2: Friend or Foe', link: 'chapter.html?manga=tomodachi-game&chapter=2' }
            ]
        },
        'tokyo-ghoul': {
            title: 'Tokyo Ghoul',
            cover: 'pics/tokyoghoul.jpg',
            description: 'A dark fantasy about ghouls and humans.',
            chapters: [
                { name: 'Chapter 1: The Ghoul', link: 'chapter.html?manga=tokyo-ghoul&chapter=1' },
                { name: 'Chapter 2: The Struggle', link: 'chapter.html?manga=tokyo-ghoul&chapter=2' }
            ]
        }
    };

    // Get URL parameters to determine which manga to display
    const urlParams = new URLSearchParams(window.location.search);
    const selectedManga = urlParams.get('manga');

    if (selectedManga && mangaData[selectedManga]) {
        const manga = mangaData[selectedManga];
        document.getElementById('manga-title').textContent = manga.title;
        document.getElementById('manga-cover').src = manga.cover;
        document.getElementById('manga-description').textContent = manga.description;

        const chaptersDiv = document.getElementById('manga-chapters');
        manga.chapters.forEach(chapter => {
            const chapterLink = document.createElement('a');
            chapterLink.href = chapter.link;
            chapterLink.textContent = chapter.name;
            chaptersDiv.appendChild(chapterLink);
            chaptersDiv.appendChild(document.createElement('br'));
        });
    } else {
        document.getElementById('manga-title').textContent = 'Manga Not Found';
        document.getElementById('manga-description').textContent = 'Sorry, the manga you are looking for does not exist.';
    }
});
