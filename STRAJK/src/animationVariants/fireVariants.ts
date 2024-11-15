export const fireVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.5, // Stagger timing
        },
    },
};

export const childVariants = {
    initial: { rotate: 0 }, // Start state
    animate: { rotate: [0, 10, 0], transition: { duration: 1, repeat: Infinity } }
};