(module
  (import "js" "mem" (memory 19))

  (func $putPixel
      (i32.store (i32.const 0) (i32.const 0xff0000ff))
  )
  (export "putPixel" (func $putPixel))
)
