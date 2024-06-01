interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number; // duration in seconds
}

class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class Playlist {
  private songs: Song[] = [];
  private head: ListNode<Song> | null = null;
  private count: number = 0;

  // Add a song to the playlist
  addSong(song: Song): void {
    this.songs.push(song);
    const newNode = new ListNode(song);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.count++;
  }

  // Remove a song from the playlist by ID
  removeSong(songId: number): void {
    this.songs = this.songs.filter((song) => song.id !== songId);
    let current = this.head;
    let previous: ListNode<Song> | null = null;

    while (current !== null) {
      if (current.value.id === songId) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.count--;
        break;
      }
      previous = current;
      current = current.next;
    }
  }

  // Shuffle the playlist
  shuffle(): void {
    // Fisher-Yates shuffle algorithm for the array
    for (let i = this.songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]];
    }

    // Rebuild the linked list based on the shuffled array
    this.head = null;
    this.count = 0;
    for (const song of this.songs) {
      this.addSong(song);
    }
  }

  // Get the current sequence of songs
  getPlaylistSequence(): Song[] {
    const sequence: Song[] = [];
    let current = this.head;
    while (current !== null) {
      sequence.push(current.value);
      current = current.next;
    }
    return sequence;
  }

  // Get song metadata by ID
  getSongById(songId: number): Song | undefined {
    return this.songs.find((song) => song.id === songId);
  }

  // Get the number of songs in the playlist
  size(): number {
    return this.count;
  }
}

// Usage example
const playlist = new Playlist();
playlist.addSong({ id: 1, title: "Song 1", artist: "Artist A", duration: 240 });
playlist.addSong({ id: 2, title: "Song 2", artist: "Artist B", duration: 200 });
playlist.addSong({ id: 3, title: "Song 3", artist: "Artist C", duration: 180 });

console.log(playlist.getPlaylistSequence());

playlist.removeSong(2);
console.log(playlist.getPlaylistSequence());

playlist.shuffle();
console.log(playlist.getPlaylistSequence());
