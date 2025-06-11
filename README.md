How I built this:

1. Install Next.js in project in VS code
    - "npx create-next-app@latest" to get install latest version
        - Y to typescript, ESlint, Tailwind CSS, src directory, app router
        - N to import alias

2. Remove majority of text from root page.tsx  
    - only leave "export default function Home() {
        return (
            <main>
            </main>
        );
    }"      

3. Create "Posts" page
    - Create by adding new folder in "src" named "posts"
    - Add page.tsx within "posts" folder

4. Customize style in layout.tsx
    - Create template literal with inter.className using tailwindcss pallets 

5. Separate "src" and "app" folders, so components in "app" are children of "src"
    - Add separate components folder within app folder

6. Created header.tsx with menu within "components" folder
    - Add logo using image within "public" folder
        - Use <Image> component from Next.js
        - Specify width and height
        - Add link to logo to home page
    - Add <nav>
        - map out at top of header.tsx
        - use navLinks.map
    - Add styling using flexbox for layout
    - Add styling so selected link is darker color in nav menu
        - "usePathname();
        - Convert to client component 

7. Created footer.tsx with copyright symbol
    - &copy;
    - Add styling using flexbox
        - flex-col for vertical flow
        - min-h-screen

8. Add container to constrain width of all components 
    - Add "container.tsx" to "components" folder
    - Create <div> with maximum width with prompt of {children}
    - Add min-h-screen, flex-col for vertical flow
        - remove "flex-col" from footer.tsx

9. Update metadata in layout.tsx

10. Make Header a client component (34:02)
