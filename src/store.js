import create from "zustand"

const useStore = create((set) => ({

    toastList: [],

    addToast: (toast) => set((state) => {
        // debugger
        return {
            toastList: [
                ...state.toastList,
                { type: toast.type, title: toast.title, id: Math.random() * 100 },
            ]
        }
    }),
    
    removeToast: (id) => set((state) => ({
        toastList: state.toastList.filter((toast) => toast.type !== id),
    })),

}))

export default useStore