import { TestBed } from '@angular/core/testing';
import { ContactoComponent } from './contacto.component';
describe('ContactoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ContactoComponent]
        });
        fixture = TestBed.createComponent(ContactoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contacto.component.spec.js.map