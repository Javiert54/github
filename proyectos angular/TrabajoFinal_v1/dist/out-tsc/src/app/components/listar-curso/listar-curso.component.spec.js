import { TestBed } from '@angular/core/testing';
import { ListarCursoComponent } from './listar-curso.component';
describe('ListarCursoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListarCursoComponent]
        });
        fixture = TestBed.createComponent(ListarCursoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listar-curso.component.spec.js.map