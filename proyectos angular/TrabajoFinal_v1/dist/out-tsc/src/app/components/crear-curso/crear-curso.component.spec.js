import { TestBed } from '@angular/core/testing';
import { CrearCursoComponent } from './crear-curso.component';
describe('CrearCursoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CrearCursoComponent]
        });
        fixture = TestBed.createComponent(CrearCursoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=crear-curso.component.spec.js.map