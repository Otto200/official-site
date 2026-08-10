
        // Drawer Toggle Functionality
        const sidebar = document.getElementById('sideResourcesMenu');
        document.getElementById('sidebarToggle').addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Nested Accordion Structure Controller
        function toggleSubNav(triggerElement) {
            const currentItem = triggerElement.parentElement;
            currentItem.classList.toggle('active');
        }

        // Active State Dock Button Switch Controller
        function handleDockPress(btnRef, viewId) {
            document.querySelectorAll('.dock-action-btn').forEach(b => b.classList.remove('active'));
            btnRef.classList.add('active');
            loadContent('dock-' + viewId);
        }

        // Placeholders for content execution mutations (Own active CSS states apply)
        function toggleMainDisplay(panelId) {
            const canvas = document.getElementById('workspace-dynamic-canvas');
            canvas.innerHTML = `<div class='content-card-active animate-glow'><h2>Active Module View: ${panelId.toUpperCase().replace('-', ' ')}</h2><p>State instance initialized via top tier secondary navigation logic.</p></div>`;
        }

        // Secure content layout payload injector
        function loadContent(nodeId) {
            const canvas = document.getElementById('workspace-dynamic-canvas');
            canvas.innerHTML = `<div class='content-card-active clicked-node-state'><h2>Target Payload Node: ${nodeId.toUpperCase()}</h2><p>Data payload injected securely into layout system viewport canvas layer.</p></div>`;
        }
  
