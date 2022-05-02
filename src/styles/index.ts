import 'virtual:windi.css'
import { browser } from '$app/env'
import './global.css'

if (browser) import('virtual:windi-devtools')
