export default function () {
    const list: string[] = [
        'Do as I say. Not as I do.',
        'Now in HD!',
        'Certifiably stupid.',
        'I write bad code that does interesting stuff.',
        'On my way to import java.util.*',
        'I can exit Vim. Hire me.',
        '01000011 01101000 01100101 01100101 01110011 01100101 00100001',
        'I use Arch BTW.',
        'Always hating on Python.',
        'What is memory management?',
        'else if else if else if else if'
    ]

    return list[Math.floor(Math.random() * list.length)]
}
