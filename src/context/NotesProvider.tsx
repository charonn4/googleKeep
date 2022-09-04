import React, {createContext, useState} from 'react';

export const NotesContext = createContext(null as any)

const NotesProvider = ({children}: any) => {
    const [notes, setNotes] = useState<any>([])
    const [archiveNotes, setArchiveNotes] = useState<any>([])
    const [deletedNotes, setDeletedNotes] = useState<any>([])
    const [searchText, setSearchText] = useState<string>('')

    return (
            <NotesContext.Provider value={{
                notes,
                setNotes,
                archiveNotes,
                setArchiveNotes,
                deletedNotes,
                setDeletedNotes,
                searchText,
                setSearchText
            }}>
                {children}
            </NotesContext.Provider>
    );
};

export default NotesProvider;