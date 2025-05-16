'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import { useEffect, useRef, useState } from 'react'

import Toolbar from './Toolbar'

export default function RichEditor({ value, onChange }) {
  const editorContainerRef = useRef(null)
  const [headerLevel, setHeaderLevel] = useState(2)

  const handleDivClick = () => {
    if (editor) editor.commands.focus()
  }

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false, 
      }),
      Underline,
      Heading.configure({ levels: [2, 3, 4] }),
      Image,
    ],
    editorProps: {
      attributes: {
        class: 'w-full min-h-[400px] p-4 outline-none',
      }
    },
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    immediatelyRender: false,
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '')
    }
  }, [value, editor])

  return (
    <div className="w-full max-w-10xl mx-auto">
      <Toolbar editor={editor} headerLevel={headerLevel} setHeaderLevel={setHeaderLevel} />
      <div
        ref={editorContainerRef}
        className="w-full min-h-[400px] border-2 border-black bg-[#D9D9D9] rounded-md focus-within:border-[#191970] focus-within:shadow-[0_0_5px_#191970]"
        onClick={handleDivClick}
      >
        <EditorContent
          editor={editor}
          spellCheck={false}
          style={{ width: '100%', height: '100%', outline: 'none' }}
        />
      </div>
    </div>
  )
}