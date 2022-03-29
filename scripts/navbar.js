function navLinks() {
    return {        
        active : localStorage.getItem('active'),
        links: [            
            { name: 'Home', url: '/'},
            { name: 'Our Services', url: './our-services.html'},
            { name: 'Our Room', url: './our-room.html'},
            { name: 'Gallery', url: './gallery.html'},
            { name: 'Links', url: './links.html'},
        ],  
    }
}