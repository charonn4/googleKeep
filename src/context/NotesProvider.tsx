import React, {createContext, useState} from 'react';

export const NotesContext = createContext(null as any)


const NotesProvider = ({chidlren}: any) => {
    const [notes, setNotes] = useState<any>([])
    const [archiveNotes, setArchiveNotes] = useState<any>([])
    const [deletedNotes, setDeletedNotes] = useState<any>([])

    return (
            <NotesContext.Provider value={{
                notes,
                setNotes,
                archiveNotes,
                setArchiveNotes,
                deletedNotes,
                setDeletedNotes
            }}>
                {chidlren}
            </NotesContext.Provider>
    );
};

export default NotesProvider;