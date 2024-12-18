import { afterNextRender, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    public config = {
        settings: {
            layout_type: "ltr",
            layout_version: "light-only",
            sidebar_type: "default-sidebar",
            sidebar: {
                type: "compact-wrapper",
                body_type: "sidebar-icon",
            },
        },
        color: {
            primary_color: "#122C34",
            secondary_color: "#26c6da",
        },
    };

    constructor() {
        afterNextRender(() => {
            if (this.config.settings.layout_type == "rtl")
                document
                    .getElementsByTagName("html")[0]
                    .setAttribute("dir", this.config.settings.layout_type);

            document.documentElement.style.setProperty(
                "--theme-deafult",
                this.config.color.primary_color
            );
            document.documentElement.style.setProperty(
                "--theme-secondary",
                this.config.color.secondary_color
            );
        });
    }

}
