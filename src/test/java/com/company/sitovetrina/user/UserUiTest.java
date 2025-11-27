package com.company.sitovetrina.user;

import com.company.sitovetrina.SitoVetrinaApplication;
import com.company.sitovetrina.entity.User;
import com.company.sitovetrina.view.user.UserDetailView;
import com.company.sitovetrina.view.user.UserListView;
import com.vaadin.flow.component.Component;
import io.jmix.core.DataManager;
import io.jmix.flowui.ViewNavigators;
import io.jmix.flowui.component.grid.DataGrid;
import io.jmix.flowui.component.textfield.JmixPasswordField;
import io.jmix.flowui.component.textfield.TypedTextField;
import io.jmix.flowui.data.grid.DataGridItems;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.testassist.FlowuiTestAssistConfiguration;
import io.jmix.flowui.testassist.UiTest;
import io.jmix.flowui.testassist.UiTestUtils;
import io.jmix.flowui.view.View;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@UiTest
@SpringBootTest(classes = {SitoVetrinaApplication.class, FlowuiTestAssistConfiguration.class})
public class UserUiTest {

    @Autowired
    DataManager dataManager;

    @Autowired
    ViewNavigators viewNavigators;

    @Test
    void test_createUser() {
        viewNavigators.view(UiTestUtils.getCurrentView(), UserListView.class).navigate();

        UserListView userListView = UiTestUtils.getCurrentView();
        JmixButton createBtn = UiTestUtils.getComponent(userListView, "createButton");
        createBtn.click();
        UserDetailView userDetailView = UiTestUtils.getCurrentView();
        TypedTextField<String> usernameField = UiTestUtils.getComponent(userDetailView, "usernameField");
        String username = "test-user-" + System.currentTimeMillis();
        usernameField.setValue(username);

        JmixPasswordField passwordField = UiTestUtils.getComponent(userDetailView, "passwordField");
        passwordField.setValue("test-passwd");

        JmixPasswordField confirmPasswordField = UiTestUtils.getComponent(userDetailView, "confirmPasswordField");
        confirmPasswordField.setValue("test-passwd");
        JmixButton commitAndCloseBtn = UiTestUtils.getComponent(userDetailView, "saveAndCloseButton");
        commitAndCloseBtn.click();
        userListView = UiTestUtils.getCurrentView();
        DataGrid<User> usersDataGrid = UiTestUtils.getComponent(userListView, "usersDataGrid");

        DataGridItems<User> usersDataGridItems = usersDataGrid.getItems();
        Assertions.assertNotNull(usersDataGridItems);

        usersDataGridItems.getItems().stream()
                .filter(u -> u.getUsername().equals(username))
                .findFirst()
                .orElseThrow();
    }

    @AfterEach
    void tearDown() {
        dataManager.load(User.class)
                .query("e.username like ?1", "test-user-%")
                .list()
                .forEach(u -> dataManager.remove(u));
    }
}
