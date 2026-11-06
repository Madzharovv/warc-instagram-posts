export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`

export const downloadAsset = (path: string, filename: string) => {
  const anchor = document.createElement("a")
  anchor.href = assetUrl(path)
  anchor.download = filename
  anchor.rel = "noopener"
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
}
