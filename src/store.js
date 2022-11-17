import create from "zustand"

const useStore = create((set) => ({

    toastList: [],

    // Template
    // xyz: [
    //     {
    //         position: "right-top",
    //         list: [
    //             {
    //                 type: "sccess",
    //                 title: "something written here...",
    //             }
    //         ]
    //     }
    // ],

    addToast: (toast) => set((state) => {
        let toastArray = [ ...state.toastList ]

        let categoryIndex = toastArray.findIndex((obj) => {
            return obj.position === toast.position
        })

        if(categoryIndex < 0) {
            toastArray.push({
                position: toast.position,
                list: [
                    {
                        type: toast.type,
                        title: toast.title,
                        id: toast.id
                    }
                ]
            })
        } else {
            toastArray[categoryIndex].list.push({ type: toast.type, title: toast.title, id: toast.id })
        }

        return {
            toastList: toastArray
        }
    }),
    
    removeToast: (position, id) => set((state) => {
        
        let toastArray = [ ...state.toastList ]
        
        let categoryIndex = toastArray.findIndex((obj) => {
            return obj.position === position
        })

        if(categoryIndex >= 0) {
            toastArray[categoryIndex].list = [...toastArray[categoryIndex].list ].filter((toast) => toast.id !== id)
            // debugger
        }

        // debugger

        return {
            toastList: toastArray
        }
        
    }),

}))

export default useStore