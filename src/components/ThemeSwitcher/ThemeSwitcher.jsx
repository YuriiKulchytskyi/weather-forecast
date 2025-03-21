import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../redux/theme/theme"
import { useEffect } from "react"

export const ThemeSwitcher = () => {

    const theme = useSelector((state) => state.theme.theme)

    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark")
    }, [theme])

    const dispatch = useDispatch()

    return (
        <button type="button" onClick={() => dispatch(toggleTheme())} style={{backgroundColor: 'transparent', border: 'none'}}>{theme === 'light' ? "☀️" : "🌙"}</button>
    )
}