function Button() {
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    };

    return <button style={styles}>Click me</button>;
}

export default Button;

// HOW TO STYLE REACT COMPONENTS WITH CSS
// --------------------------------------
// (not including external framework or preprocessors)
//
// 1. EXTERNAL
// 2. MODULES
// 3. INLINE
