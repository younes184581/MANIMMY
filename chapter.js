document.addEventListener('DOMContentLoaded', () => {
    // Example manga chapter data
    const mangaChapters = {
        'spy-x-family': {
            title: 'Spy x Family',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/spy-x-family-ch1-1.jpg',
                        'pics/spy-x-family-ch1-2.jpg',
                        'pics/spy-x-family-ch1-3.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/spy-x-family-ch2-1.jpg',
                        'pics/spy-x-family-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/spy-x-family-ch3-1.jpg',
                        'pics/spy-x-family-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'takahashi': {
            title: 'Takahashi',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/takahashi-ch1-1.jpg',
                        'pics/takahashi-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/takahashi-ch2-1.jpg',
                        'pics/takahashi-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/takahashi-ch3-1.jpg',
                        'pics/takahashi-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'beatM': {
            title: 'Beat Master',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/beatM-ch1-1.jpg',
                        'pics/beatM-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/beatM-ch2-1.jpg',
                        'pics/beatM-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/beatM-ch3-1.jpg',
                        'pics/beatM-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'kka': {
            title: 'KKA',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/kka-ch1-1.jpg',
                        'pics/kka-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/kka-ch2-1.jpg',
                        'pics/kka-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/kka-ch3-1.jpg',
                        'pics/kka-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'kagura': {
            title: 'Kagura',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/kagura-ch1-1.jpg',
                        'pics/kagura-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/kagura-ch2-1.jpg',
                        'pics/kagura-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/kagura-ch3-1.jpg',
                        'pics/kagura-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'cipher': {
            title: 'Cipher',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/cipher-ch1-1.jpg',
                        'pics/cipher-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/cipher-ch2-1.jpg',
                        'pics/cipher-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/cipher-ch3-1.jpg',
                        'pics/cipher-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'bloods-of-the-tracks': {
            title: 'Bloods of the Tracks',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/bloods-of-the-tracks-ch1-1.jpg',
                        'pics/bloods-of-the-tracks-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/bloods-of-the-tracks-ch2-1.jpg',
                        'pics/bloods-of-the-tracks-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/bloods-of-the-tracks-ch3-1.jpg',
                        'pics/bloods-of-the-tracks-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'punpun': {
            title: 'Goodnight Punpun',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/punpun-ch1-1.jpg',
                        'pics/punpun-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/punpun-ch2-1.jpg',
                        'pics/punpun-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/punpun-ch3-1.jpg',
                        'pics/punpun-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'firepunch': {
            title: 'Fire Punch',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/firepunch-ch1-1.jpg',
                        'pics/firepunch-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/firepunch-ch2-1.jpg',
                        'pics/firepunch-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/firepunch-ch3-1.jpg',
                        'pics/firepunch-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'homunculus': {
            title: 'Homunculus',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/homunculus-ch1-1.jpg',
                        'pics/homunculus-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/homunculus-ch2-1.jpg',
                        'pics/homunculus-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/homunculus-ch3-1.jpg',
                        'pics/homunculus-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'nagumo': {
            title: 'Nagumo',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/nagumo-ch1-1.jpg',
                        'pics/nagumo-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/nagumo-ch2-1.jpg',
                        'pics/nagumo-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/nagumo-ch3-1.jpg',
                        'pics/nagumo-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'pumpkin-night': {
            title: 'Pumpkin Night',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/pumpkin-night-ch1-1.jpg',
                        'pics/pumpkin-night-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/pumpkin-night-ch2-1.jpg',
                        'pics/pumpkin-night-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/pumpkin-night-ch3-1.jpg',
                        'pics/pumpkin-night-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'record-of-ragnarok': {
            title: 'Record of Ragnarok',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/record-of-ragnarok-ch1-1.jpg',
                        'pics/record-of-ragnarok-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/record-of-ragnarok-ch2-1.jpg',
                        'pics/record-of-ragnarok-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/record-of-ragnarok-ch3-1.jpg',
                        'pics/record-of-ragnarok-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'jjk': {
            title: 'Jujutsu Kaisen',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/jjk-ch1-1.jpg',
                        'pics/jjk-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/jjk-ch2-1.jpg',
                        'pics/jjk-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/jjk-ch3-1.jpg',
                        'pics/jjk-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        '20th-century-boys': {
            title: '20th Century Boys',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/20th-century-boys-ch1-1.jpg',
                        'pics/20th-century-boys-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/20th-century-boys-ch2-1.jpg',
                        'pics/20th-century-boys-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/20th-century-boys-ch3-1.jpg',
                        'pics/20th-century-boys-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'dandadan': {
            title: 'Dandadan',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/dandadan-ch1-1.jpg',
                        'pics/dandadan-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/dandadan-ch2-1.jpg',
                        'pics/dandadan-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/dandadan-ch3-1.jpg',
                        'pics/dandadan-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'vagabond': {
            title: 'Vagabond',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/vagabond-ch1-1.jpg',
                        'pics/vagabond-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/vagabond-ch2-1.jpg',
                        'pics/vagabond-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/vagabond-ch3-1.jpg',
                        'pics/vagabond-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'csm': {
            title: 'Chainsaw Man',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/csm-ch1-1.jpg',
                        'pics/csm-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/csm-ch2-1.jpg',
                        'pics/csm-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/csm-ch3-1.jpg',
                        'pics/csm-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'tomodachi-game': {
            title: 'Tomodachi Game',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/tomodachi-game-ch1-1.jpg',
                        'pics/tomodachi-game-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/tomodachi-game-ch2-1.jpg',
                        'pics/tomodachi-game-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/tomodachi-game-ch3-1.jpg',
                        'pics/tomodachi-game-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'tokyo-ghoul': {
            title: 'Tokyo Ghoul',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/tokyo-ghoul-ch1-1.jpg',
                        'pics/tokyo-ghoul-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/tokyo-ghoul-ch2-1.jpg',
                        'pics/tokyo-ghoul-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/tokyo-ghoul-ch3-1.jpg',
                        'pics/tokyo-ghoul-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        }
    };

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const mangaId = urlParams.get('manga');
    const chapterId = urlParams.get('chapter');

    if (mangaId && chapterId && mangaChapters[mangaId] && mangaChapters[mangaId].chapters[chapterId]) {
        const manga = mangaChapters[mangaId];
        const chapter = manga.chapters[chapterId];

        document.getElementById('chapter-title').textContent = `${manga.title} - ${chapter.title}`;
        
        const chapterContent = document.getElementById('chapter-content');
        chapterContent.innerHTML = ''; // Clear existing content
        
        chapter.images.forEach(imageSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = `${manga.title} - ${chapter.title}`;
            imgElement.classList.add('chapter-image'); // Optional: Add a class for additional styling
            chapterContent.appendChild(imgElement);
        });
    } else {
        document.getElementById('chapter-title').textContent = 'Chapter Not Found';
        document.getElementById('chapter-content').textContent = 'The chapter you are looking for does not exist.';
    }
});
