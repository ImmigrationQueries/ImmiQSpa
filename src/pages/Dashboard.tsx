import React, { useEffect, useState } from 'react';

interface Song {
    id: number;
    name: string;
}

const Dashboard = () => {
    const [songs, setSongs] = useState<Song[]>([]);

    useEffect(() => {
        const loadSongs = async () => {
            const request = await fetch('http://localhost:3040/songs', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('@token'),
                },
            });

            const allSongs = await request.json();
            setSongs(allSongs.songs);
        };
        loadSongs();
    }, []);
    return (
        <div className="container">
            <h1>BookList</h1>
            {/* map the book list to show book name and image */}
            {songs.map((song) => (
                <div key={song.id} className="booklist">
                    <h3>{song.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
